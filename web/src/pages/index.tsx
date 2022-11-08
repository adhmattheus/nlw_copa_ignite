// interface HomeProps {
//   count: number
// }
import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw.png'
import logoImg from '../assets/logo.svg'
import usersAvatar from '../assets/avatares.png'
import iconCheckImg from '../assets/icon.svg'

export default function Home() {

  return (
    <div>
      <main>
        <Image src={logoImg} alt="logo nlw copa" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos</h1>

        <div>
          <Image src={usersAvatar} alt="imagem dos usuarios" />
          <strong>
            <span>+12.592</span> pessoas já usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder='Qual nome do seu bolão?' />
          <button type='submit'> criar meu bolão</button>

          <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
        </form>

        <div>
          <div>
            <Image src={iconCheckImg} alt=' ' />
            <div>
              <span>+2.834</span>
              <span>Bolões criados </span>
            </div>
          </div>

          <div>
            <Image src={iconCheckImg} alt=' ' />
            <div>
              <span>+2.834</span>
              <span>Bolões criados </span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="dois celulares" quality={100} />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count');
//   const data = await response.json()

//   console.log(data);

//   return {
//     props: {
//       count: data.count,
//     }
//   }
// }
