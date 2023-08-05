 import Google from "../auth/login"
export default function Login() {
  return (
    <div>
    <div className="w-full min-h-screen bg-[#00A8E8] flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">TV ARIAS</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1" form="email">Correo</label>
            <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1" form="password">Contraseña</label>
            <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
              <label form="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Recordame </label>
            </div>
            <a href="#" className="text-sm"> Olvidaste la contraseña? </a>
          </div>
          <div className="mt-6">
            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#20d0d8] border border-transparent rounded-md font-semibold capitalize text-black hover:bg-[#0ffff7] active:bg-[#0ffff7] focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Inicia Sesion</button>
          </div>
          <div className="mt-6 text-center flex justify-center">
            <Google/>
          </div>
        </form>
      </div>
    </div></div>
  )
}
