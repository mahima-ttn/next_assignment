import BlogList from "@/components/BlogList";
interface Homeprops{
  data?:string[]
}

const  Home = ({data}: Homeprops) =>{  
  return (
    <>
    <BlogList data ={data} />    
    </>
  );
}
export const getStaticProps =async () => {
  const res =  await fetch('https://dummyapi.online/api/blogposts');
  const data = await res.json();
  return {
    props:{
      data
    }
  }
}

export default Home;