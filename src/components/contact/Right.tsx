import React from 'react'
import emailjs from '@emailjs/browser'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import Progress from '../Progress'
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

export default function Right({}: Props) {
    const form = React.useRef<any>()
    const [isLoading, setLoading] = React.useState<boolean>(false)

    const sendEmail = (e: any) => {
        e.preventDefault()
        if ( form.current.user_name.value.length && form.current.user_email.value.length && form.current.message.value.length ) {
            setLoading(true)

            form.current.message.value = `name : ${form.current.user_name.value}\nemail : ${form.current.user_email.value}\n\n${form.current.message.value}
            `

            // const serviceId = import.meta.env.SERVICE_ID
            // const templateId = import.meta.env.TEMPKATE_ID
            // const publicKey = import.meta.env.PUBLIC_KEY
            const serviceId = "service_2d4gama"
            const templateId = "template_hclcfmd"
            const publicKey = "VA0cUbFkJLStg3cwd"
            emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(() => {
                toast('🦄 Pesan berhasil dikirim!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setLoading(false)
                form.current.user_name.value = ''
                form.current.user_email.value = ''
                form.current.message.value = ''
            }, (error) => {
                form.current.message.value = ''
                toast.error('🦄 Pesan gagal dikirim!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                console.log(error)
                setLoading(false)
            })
        }
    }

  return (
    <div className='mt-4 sm:mt-0 px-4 sm:p-8'>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
        <ToastContainer />
        {/* <h1 className="text-4xl font-bold text-center">Customer Service</h1> */}
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <div>
                    <label htmlFor="name">Nama</label>
                </div>
                <input type="text" id='name' name='user_name' placeholder='Order Service' className='input w-full px-4 py-3 rounded-md' autoComplete='off' required />
            </div>
            <div className='mt-3'>
                <div>
                    <label htmlFor="email">Email Address</label>
                </div>
                <input type="email" id='email' name='user_email' placeholder='example@gmail.com' className='input w-full px-4 py-3 rounded-md' autoComplete='off' required />
            </div>
            <div className='mt-3'>
                <div>
                    <label htmlFor="message">Pesan</label>
                </div>
                <textarea id='message' name='message' rows={5} className='input w-full px-4 py-3 rounded-md' autoComplete='off' placeholder='Message' required />
            </div>
            <div className="mt-4">
                <button className='button w-full py-3 rounded-md flex justify-center' disabled={isLoading}>{ isLoading ? (<Progress />) : (<h1>Kirim</h1>) }</button>
            </div>
        </form>
    </div>
  )
}