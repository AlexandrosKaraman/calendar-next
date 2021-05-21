import styles from "./modal.module.scss"
import { useSelector } from "react-redux"

export default function Modal({ active, setActive }) {

  const { tasks } = useSelector((state) => state.tasks)

  return (
    <div className={styles.modal} style={{ transform: active ? "scale(1)" : "scale(0)" }} onClick={() => setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()
      }>
        <h2>Title</h2>
        <textarea placeholder="add a comment..."></textarea>
        <div>{tasks.name}</div>
      </div>
    </div >
  )
}