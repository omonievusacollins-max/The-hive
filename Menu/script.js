export async function getMenu(){
  const response = await fetch('menu.json')
  if(!response.ok){
    throw new Error('failed to fetch JSON');
  }
  const data = await response.json();
  return data;
}