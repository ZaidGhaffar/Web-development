export function NetworkDiagram() {
  return (
    <div className="relative mt-20 lg:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Left side - Your Customers */}
            <div className="relative mb-8 lg:mb-0">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Your Customers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-16 h-16 bg-gray-200 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Your CS Team */}
            <div className="relative">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Your CS Team</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-16 h-16 bg-gray-200 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center TrustLine logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">TrustLine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

