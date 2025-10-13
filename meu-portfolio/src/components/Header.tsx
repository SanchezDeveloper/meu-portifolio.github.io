import Image from 'next/image'

export default function Home() {
  return (
    <header>
      {if window.<Image 
        src="../../public/assets/images/profile-img.png"
        width={50}
        height={50}
        alt="Foto de perfil"
        style={{ borderRadius: '50%' }}
      />

      <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre mim">Sobre mim</a></li>
      <li><a href="#projetos">projetos</a></li>
      <li><a href="#contato">contatos</a></li>
      </ul>}

    </header>
  )
}