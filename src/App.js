import './App.css';
import Profile from './profile/Profile';
const data = [{
  fullName: "Audra Simpson",
  bio: "Audra Simpson",
  profession: "Personal Website"
},
{
  fullName: "Chime Mmeje",
  bio: "Chime Mmeje",
  profession: "LinkedIn"
},
{
  fullName: "DJ Nexus",
  bio: "DJ Nexus",
  profession: "Facebook"
},
{
  fullName: "Lena Axelsson",
  bio: "Lena Axelsson",
  profession: "Industry Website"
}
]
function App() {
  return (
    <div className="App" >
      <h1 className="textarea">workshop props</h1>
      <Profile data={data} />
      <footer >
        <h6>Photo</h6>
        
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoBnq05850hAXAOcv0CciJtz3dASMTGcBQY38EssxzZkD7mpDlgUj1HUlhHaFJlo5gEk&usqp=CAU"
          alt=""
        />
      </footer>
    </div>
  );
}

export default App;
