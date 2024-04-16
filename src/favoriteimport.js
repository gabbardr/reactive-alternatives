import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vylermfghvmglifgstiv.supabase.co'
const supabaseKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bGVybWZnaHZtZ2xpZmdzdGl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyODc0NTgsImV4cCI6MjAyODg2MzQ1OH0.FF6Hlwqipkk9rjW-Zlzq4XdRg9LnCwZHeb36JONGqwk'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getDrinks() {
  let { data: drinks, error } = await supabase
    .from('drinks')
    .select('*')


  for (let drink of drinks) {
    let drinklist = document.getElementById('favoriteDrinks');
    drinklist.innerHTML += `<td>${drink.Name}</td> <td>${drink.Flavor}</td> <td>${drink.Price}</td>`;
  }

}

getDrinks();