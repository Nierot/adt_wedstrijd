import FileUpload from '../components/FileUpload'
import styles from '../styles/Home.module.css'

export default function upload() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>
            Upload je adtje hier!
          </h1>
          <FileUpload />
        </div>
      </main>
    </div>
  )
}