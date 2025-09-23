import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLogin } from "../../features/exam/examSlice"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const AdminLogin = () => {
  const [input, setInput] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useSelector((store) => store.exam.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
      return
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.email.trim() === 'admin@gmail.com' && input.password.trim() === 'password') {
      dispatch(getLogin(true))
      navigate('/')
    }
  }

  return (
    <div className="height bg-slate-950 flex items-center justify-center relative overflow-hidden">

      <motion.form
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="group w-full max-w-sm rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur shadow-xl overflow-hidden p-8"
      >
      
        <div className="h-1 w-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 rounded-t-2xl transition-all duration-500 group-hover:w-full" />
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 text-center">
          Admin Login
        </h2>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Your email
          </label>
          <motion.input
            whileFocus={{ boxShadow: "0 0 0 3px rgba(99,102,241,0.25)" }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            type="email"
            id="email"
            value={input.email}
            onChange={e => setInput({ ...input, [e.target.id]: e.target.value })}
            required
            placeholder="admin@gmail.com"
            className="w-full rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-white/10 backdrop-blur px-3 py-2.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Your password
          </label>
          <motion.input
            whileFocus={{ boxShadow: "0 0 0 3px rgba(236,72,153,0.19)" }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            type="password"
            id="password"
            value={input.password}
            onChange={e => setInput({ ...input, [e.target.id]: e.target.value })}
            required
            className="w-full rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-white/10 backdrop-blur px-3 py-2.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(79,70,229,0.18)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-full rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-medium text-base shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  )
}

export default AdminLogin
