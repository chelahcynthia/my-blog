import Image from "next/image"

function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
        <Image 
        src="/images/profile.png"
        width={200}
        height={200}
        alt="Cynthia Chelah"
        priority={true}
        
        />

    </section>
  )
}

export default MyProfilePic