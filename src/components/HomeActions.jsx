export default function HomeActions({label, icon}){
    return(
           <div key={label} className="hover:bg-yellow-900/20 rounded-xl p-3 transition">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-yellow-900/30 text-yellow-300 rounded-lg">
              {icon}
            </div>
            <p className="text-sm font-medium">{label}</p>
          </div>

    )
}