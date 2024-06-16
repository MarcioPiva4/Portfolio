import Banner from "@/components/Banner";

export async function getData(){
  const response = await fetch('http://localhost:8080', {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    }
  });
  const data = await response.json();

  return data;
}

export default async function Home() {
  const data = await getData();
  //console.log(data);
  return (
    <>
      <main>
        <section>
          <Banner />
        </section>
      </main>
    </>
  );
}
