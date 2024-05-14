import { EMAIL, WHATSAPP } from '../../constants/config'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

type Props = {}

export default function Left({}: Props) {
  return (
    <div className='mt-6 sm:mt-0 p-4 sm:p-10'>
      <div>
        <h1 className="text-4xl font-bold">Hubungi Kami</h1>
        <p className='w-[90%] mt-0.5'>Kami siap membalas pesan anda secepatnya dalam 24 jam.</p>
      </div>
      <div className="mt-10">
        <div className="flex gap-4">
          <PhoneIcon className='w-8 h-8' />
          <div>
            <h1 className="text-xl font-semibold">Kirimi kami pesan</h1>
            <a href={`https://wa.me/${WHATSAPP}`} className="text-sm font-semibold"><span className="transition ease-in-out hover:text-primary hover:underline">+{ WHATSAPP }</span> (WhatsApp)</a>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <EnvelopeIcon className='w-8 h-8' />
          <div>
            <h1 className="text-xl font-semibold">Kirim pesan ke email</h1>
            <a href={`https://wa.me/${WHATSAPP}`} className="text-sm font-semibold"><span className="transition ease-in-out hover:text-primary hover:underline">{ EMAIL }</span> (Customer Service)</a>
          </div>
        </div>
      </div>
    </div>
  )
}