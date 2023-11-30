import { useEffect } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import UploadFile from './components/userUtils/AddFile';
import FileDownload from './components/userUtils/DownloadFile';
export default function Dashboard({
  username,
  setUsername,
  password,
  setPassword,
  authenticated
}) {
    const navigate = useNavigate();
    const userId = '2';

    if (!username.length) {
        navigate(`/login`);
    }
  function loginUser(event) {
    event?.preventDefault();
    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if(result.success) {
          alert(result.success);
        } else {
          alert(result.message);
        }
      })
      .catch(console.error);
  }


  return (
    authenticated ?
    <div className="dashboard-page-container">
      <h3>Welcome, {username}</h3>
      <UploadFile/>
      <FileDownload userId={userId}/>
    </div> :
    <div>You are not logged in</div>
  );
}
