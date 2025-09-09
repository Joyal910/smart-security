"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock, Users, Search, Home, ChevronRight,Star,Mail} from "lucide-react"
import banner from '../components/Assets/Images/hero_banner.jpeg';

const LocationsPage: React.FC = () => {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const markersRef = useRef([])
  const [activeLocation, setActiveLocation] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("All")
  const [mapLoaded, setMapLoaded] = useState(false)

  // Your location data with head office first, then ordered by districts
  const locations = [
    {
      id: 0,
      name: "Co-operate OFFICE",
      area: "Kottayam",
      phone: "+91 79944 55047",
      coords: [9.5915, 76.5222],
      isHeadOffice: true,
      address: "Smart Security and Cleaning Services, Kottayam, Kerala",
    },
    { id: 1, name: "KAZHAKOOTAM", area: "Trivandrum", phone: "9447185780", coords: [8.5667, 76.8833] },
    { id: 2, name: "CHUNDEL", area: "Thrissur", phone: "9744130060", coords: [10.5276, 76.2144] },
    { id: 3, name: "VYTILA", area: "Ernakulam", phone: "9847105748", coords: [9.9675, 76.3158] },
    { id: 4, name: "CHERUVANNUR", area: "Kozhikode", phone: "9526415575", coords: [11.2588, 75.7804] },
    { id: 8, name: "KADAPPAKADA", area: "Kollam", phone: "9562195625", coords: [8.8932, 76.6141] },
    { id: 13, name: "KALARCODE", area: "Alappey", phone: "7797970690", coords: [9.4981, 76.3388] },
    { id: 12, name: "ELANTHOOR", area: "Pathanamthitta", phone: "7994455048", coords: [9.3207, 76.7816] },
    { id: 6, name: "KUMILY", area: "Idukki", phone: "7994455047", coords: [9.5946, 77.1657] },
    { id: 11, name: "MANJERI", area: "Malapuram", phone: "9947439060", coords: [11.1201, 76.1199] },
    { id: 7, name: "KANJIKODE", area: "Palakkad", phone: "9605317056", coords: [10.7867, 76.6548] },
    { id: 10, name: "TALAP", area: "Kannur", phone: "8606038889", coords: [11.8745, 75.3704] },
    { id: 9, name: "PAYANNUR", area: "Kasaragod", phone: "7994455049", coords: [12.0935, 75.2025] },
    { id: 5, name: "SULTANBATHERY", area: "Wayanad", phone: "7994455046", coords: [11.666, 76.2638] },
  ]

  // Get unique districts for filter
  const districts = ["All", ...new Set(locations.map((loc) => loc.area))]

  // Filter locations based on search and district
  const filteredLocations = locations.filter((location) => {
    const matchesSearch =
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.area.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDistrict = selectedDistrict === "All" || location.area === selectedDistrict
    return matchesSearch && matchesDistrict
  })

  // Load Leaflet dynamically
  useEffect(() => {
    const loadLeaflet = async () => {
      try {
        // Load Leaflet CSS
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css"
        document.head.appendChild(link)

        // Load Leaflet JS
        const script = document.createElement("script")
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"
        script.onload = () => {
          // Add a small delay to ensure Leaflet is fully initialized
          setTimeout(() => {
            if (window.L && window.L.map && window.L.marker && window.L.tileLayer) {
              setMapLoaded(true)
            } else {
              console.error("Leaflet not fully loaded")
            }
          }, 100)
        }
        script.onerror = (error) => {
          console.error("Error loading Leaflet:", error)
        }
        document.head.appendChild(script)
      } catch (error) {
        console.error("Error setting up Leaflet:", error)
      }
    }

    if (!mapLoaded) {
      loadLeaflet()
    }
  }, [mapLoaded])

  // Initialize map
  useEffect(() => {
    if (!mapLoaded || !window.L || mapInstance.current || !mapRef.current) return

    try {
      const L = window.L

      // Fix default marker icons with error handling
      if (L.Icon && L.Icon.Default) {
        try {
          delete L.Icon.Default.prototype._getIconUrl
          L.Icon.Default.mergeOptions({
            iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
            iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
          })
        } catch (iconError) {
          console.warn("Error setting up default icons:", iconError)
        }
      }

      const map = L.map(mapRef.current).setView([10.8505, 76.2711], 8) // Kerala center

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      mapInstance.current = map

      // Add a small delay before adding markers to ensure map is fully ready
      setTimeout(() => {
        updateMarkers()
      }, 100)
    } catch (error) {
      console.error("Error initializing map:", error)
      setMapLoaded(false)
    }

    return () => {
      if (mapInstance.current) {
        try {
          mapInstance.current.remove()
          mapInstance.current = null
        } catch (error) {
          console.warn("Error cleaning up map:", error)
        }
      }
    }
  }, [mapLoaded])

  // Update markers when filters change
  useEffect(() => {
    if (mapInstance.current && window.L && mapLoaded) {
      updateMarkers()
    }
  }, [filteredLocations, selectedDistrict, mapLoaded])

  // Clear existing markers and add new ones
  const updateMarkers = () => {
    if (!window.L || !mapInstance.current) return

    const L = window.L

    // Clear previous markers
    markersRef.current.forEach((marker) => {
      if (marker) {
        try {
          marker.remove()
        } catch (error) {
          console.warn("Error removing marker:", error)
        }
      }
    })
    markersRef.current = []

    // Add new markers
    filteredLocations.forEach((location) => {
      try {
        // Create custom icon for head office with better error handling
        let customIcon = undefined

        if (location.isHeadOffice && L.divIcon) {
          try {
            customIcon = L.divIcon({
              html: `<div style="background-color: #1E88E5; width: 30px; height: 30px; border-radius: 50%; border: 4px solid white; box-shadow: 0 3px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"><div style="color: white; font-weight: bold; font-size: 12px;">HQ</div></div>`,
              iconSize: [30, 30],
              iconAnchor: [15, 15],
              className: "custom-head-office-marker",
            })
          } catch (iconError) {
            console.warn("Error creating custom icon, using default:", iconError)
            customIcon = undefined
          }
        }

        const markerOptions = {
          title: `${location.name}, ${location.area}`,
          alt: location.name,
        }

        if (customIcon) {
          markerOptions.icon = customIcon
        }

        const marker = L.marker(location.coords, markerOptions).addTo(mapInstance.current)

        marker.bindPopup(`
          <div class="p-3">
            <strong class="text-lg" style="color: #1E88E5;">${location.name}</strong>
            ${location.isHeadOffice ? '<br><span class="bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold">Co-Operate Office</span>' : ""}
            <br><span class="text-gray-600">${location.area}</span>
            <br><a href="tel:${location.phone}" class="text-blue-600 hover:underline font-medium">${location.phone}</a>
            ${location.address ? `<br><span class="text-sm text-gray-500">${location.address}</span>` : ""}
          </div>
        `)

        marker.on("click", () => {
          setActiveLocation(location.id)
          const cardElement = document.getElementById(`card-${location.id}`)
          if (cardElement) {
            cardElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        })

        markersRef.current.push(marker)
      } catch (error) {
        console.warn(`Error creating marker for ${location.name}:`, error)
      }
    })

    // Auto-fit map to markers if not searching
    if (searchTerm === "" && selectedDistrict === "All" && filteredLocations.length > 0) {
      try {
        const bounds = L.latLngBounds(filteredLocations.map((loc) => loc.coords))
        mapInstance.current.fitBounds(bounds)
      } catch (error) {
        console.warn("Error fitting bounds:", error)
      }
    }
  }

  // Handle card click
  const handleCardClick = (location) => {
    setActiveLocation(location.id)
    if (mapInstance.current) {
      mapInstance.current.flyTo(location.coords, 14) // Zoom to level 14
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2b2b2b" }}>
      {/* Compact Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={banner}
            alt="About Just Hearing Clinic background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="container mx-auto px-2 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 animate-fade-in-up leading-tight">
              Our{' '}
              <span className="text-white">
               Branch Networks
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up animation-delay-300 px-2">
             Your trusted partner in business security and cleaning excellence since 2001."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#2b2b2b" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: "#1E88E5" }}>
              Interactive Branch Locator
            </h2>
            <p className="text-base sm:text-lg md:text-xl px-4" style={{ color: "#F1F5F9" }}>Find our branches on the map and get detailed information</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 sm:left-4 top-3 sm:top-4 h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#F1F5F9" }} />
              <input
                type="text"
                placeholder="Search branches..."
                className="w-full p-3 sm:p-4 pl-10 sm:pl-12 rounded-lg focus:ring-2 focus:border-blue-500 shadow-sm text-sm sm:text-base"
                style={{ 
                  backgroundColor: "#13293D",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#F1F5F9",
                  focusRingColor: "#1E88E5"
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <style jsx>{`
                input::placeholder {
                  color: rgba(241, 245, 249, 0.6);
                }
              `}</style>
            </div>

            <select
              className="p-3 sm:p-4 rounded-lg focus:ring-2 focus:border-blue-500 shadow-sm min-w-full sm:min-w-48 text-sm sm:text-base"
              style={{ 
                backgroundColor: "#13293D",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#F1F5F9",
                focusRingColor: "#1E88E5"
              }}
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district === "All" ? "All Districts" : district}
                </option>
              ))}
            </select>
          </div>

          {/* Map and Cards Container */}
          <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: "#13293D", border: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="flex flex-col lg:flex-row">
              {/* Map */}
              <div className="w-full lg:w-1/2 relative">
                {!mapLoaded ? (
                  <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[700px] bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-500 flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-blue-500"></div>
                      <span className="text-sm sm:text-base">Loading map...</span>
                    </div>
                  </div>
                ) : null}
                <div
                  ref={mapRef}
                  className={`w-full h-64 sm:h-80 md:h-96 lg:h-[700px] ${mapLoaded ? "block" : "hidden"}`}
                  style={{ zIndex: 0 }}
                />
              </div>

              {/* Cards */}
              <div className="w-full lg:w-1/2 lg:h-[700px] overflow-y-auto">
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: "#1E88E5" }}>
                    Branch Locations ({filteredLocations.length})
                  </h3>

                  {filteredLocations.length === 0 ? (
                    <div className="text-center py-8 sm:py-10" style={{ color: "#F1F5F9" }}>
                      <MapPin className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" style={{ color: "rgba(241, 245, 249, 0.5)" }} />
                      <p className="text-sm sm:text-base">No branches found matching your criteria</p>
                    </div>
                  ) : (
                    <div className="space-y-3 sm:space-y-4">
                      {filteredLocations.map((location) => (
                        <div
                          key={location.id}
                          id={`card-${location.id}`}
                          className={`p-4 sm:p-6 rounded-xl border-2 transition-all cursor-pointer hover:shadow-lg ${
                            activeLocation === location.id
                              ? "shadow-lg"
                              : "hover:border-opacity-30"
                          } ${location.isHeadOffice ? "ring-2" : ""}`}
                          style={{
                            backgroundColor: "#13293D",
                            borderColor: activeLocation === location.id ? "#1E88E5" : "rgba(255,255,255,0.15)",
                            ...(activeLocation === location.id && { 
                              backgroundColor: "#1E88E5", 
                              boxShadow: "0 0 0 1px #4BA3F1" 
                            }),
                            ...(location.isHeadOffice && { 
                              ringColor: "#4BA3F1",
                              ringOpacity: 0.3
                            })
                          }}
                          onClick={() => handleCardClick(location)}
                        >
                          {location.isHeadOffice && (
                            <div className="flex flex-col sm:flex-row items-center justify-between mb-3 sm:mb-4 gap-2">
                              <div 
                                className="text-white text-center py-2 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-bold"
                                style={{ backgroundColor: "#1E88E5" }}
                              >
                                🏢 Co-operate Office
                              </div>
                              <div 
                                className="text-xs px-2 py-1 rounded"
                                style={{ 
                                  color: "#F1F5F9",
                                  backgroundColor: "rgba(255,255,255,0.15)"
                                }}
                              >
                                Primary Location
                              </div>
                            </div>
                          )}

                          <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-start space-x-2 sm:space-x-3">
                              <MapPin
                                className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0"
                                style={{ color: location.isHeadOffice ? "#1E88E5" : "#F1F5F9" }}
                              />
                              <div className="min-w-0 flex-1">
                                <h4
                                  className="text-base sm:text-lg font-bold break-words"
                                  style={{ color: location.isHeadOffice ? "#1E88E5" : "#F1F5F9" }}
                                >
                                  {location.name}
                                </h4>
                                <p className="text-sm sm:text-base break-words" style={{ color: "#F1F5F9", opacity: 0.8 }}>{location.area}</p>
                                {location.address && <p className="text-xs sm:text-sm break-words" style={{ color: "#F1F5F9", opacity: 0.6 }}>{location.address}</p>}
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#1E88E5" }} />
                              <a
                                href={`tel:${location.phone}`}
                                className="font-medium hover:underline text-sm sm:text-base break-all min-h-[44px] flex items-center"
                                style={{ color: "#F1F5F9", minHeight: "44px" }}
                                onMouseEnter={(e) => e.target.style.color = "#4BA3F1"}
                                onMouseLeave={(e) => e.target.style.color = "#F1F5F9"}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {location.phone.startsWith("+91") ? location.phone : `+91 ${location.phone}`}
                              </a>
                            </div>

                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <Clock className="h-4 w-4 flex-shrink-0" style={{ color: "#1E88E5" }} />
                              <span className="text-xs sm:text-sm" style={{ color: "#F1F5F9", opacity: 0.8 }}>24/7 Operations</span>
                            </div>

                            {location.isHeadOffice && (
                              <div 
                                className="mt-3 sm:mt-4 p-2 sm:p-3 rounded-lg"
                                style={{ backgroundColor: "rgba(30, 136, 229, 0.2)", border: "1px solid rgba(255,255,255,0.15)" }}
                              >
                                <p className="text-xs sm:text-sm" style={{ color: "#4BA3F1" }}>
                                  <strong>Central Command:</strong> Main administrative office and coordination center
                                  for all Kerala operations.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default LocationsPage