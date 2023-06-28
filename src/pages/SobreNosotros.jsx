import Menu from "../components/Menu";


export default function SobreNosotros() {
  return (
    <div>
      <Menu/>
      <h1>Sobre Nosotros</h1><br />
      <h4>Con este aplicativo Web podrás llevar registro de tus tareas de una manera muy sencilla</h4><br />
      <h4>Tendras acceso a estas funcionalidades:</h4>
      <ul className="lista-funcionalidades">
        <li>Agregar Tareas, con NOMBRE y DESCRIPCION</li>
        <li>Borrar Tareas</li>
        <li>Editar Tareas</li>
        <li>Visualizar cuantas Tareas tienes en tu lista</li>
        <li>Visualizar cuantas Tareas Pendientes tienes en tu lista</li>
        <li>Borrar TODAS las Tareas</li>

      </ul>
    </div>
  )
}
