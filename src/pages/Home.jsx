import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <h3>Bienvenido a TareAPP</h3>
      <p>
        Con este aplicativo Web podrás llevar un control de tus tareas
        Fácilmente!
      </p>
    </div>
  );
}
