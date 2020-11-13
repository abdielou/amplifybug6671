import { Amplify, DataStore, Predicates } from "aws-amplify";
import Head from "next/head";
import { useEffect, useState } from "react";
import awsExports from "../aws-exports";
import styles from "../../styles/Home.module.css";
import { MyModel1, MyModel2 } from "../models";

Amplify.configure({ ...awsExports });
Amplify.Logger.LOG_LEVEL = 'DEBUG';

export default function Home() {
  let [ myModel1List, setMyModel1List ] = useState([])
  let [ myModel2List, setMyModel2List ] = useState([])

  useEffect(() => {
    getAllMyModel1()
    const subscription1 = DataStore.observe(MyModel1).subscribe(getAllMyModel1)
    getAllMyModel2()
    const subscription2 = DataStore.observe(MyModel2).subscribe(getAllMyModel2)
    return () => {
      subscription1.unsubscribe()
      subscription2.unsubscribe()
    }
  },[])

  const getAllMyModel1 = () => DataStore.query(MyModel1, Predicates.ALL).then(setMyModel1List)
  const getAllMyModel2 = () => DataStore.query(MyModel2, Predicates.ALL).then(setMyModel2List)
  const handleCreateMyModel1 = () => {
    DataStore.save(new MyModel1({
      name: `MyModel1 ${Date.now()}`
    }))
  }
  const handleCreateMyModel2 = () => {
    DataStore.save(new MyModel2({
      name: `MyModel2 ${Date.now()}`
    }))
  }
  
  
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Amplify + Next.js</h1>
        {/* MODEL1 */}
        <p className={styles.description}>
          <code className={styles.code}>{myModel1List.length}</code>
          model1s
        </p>
        <div className={styles.grid}>
          {myModel1List.map((m1) => (
            <a className={styles.card} href={`/posts/${m1.id}`} key={m1.id}>
              <h3>{m1.name}</h3>
              <p>{m1.description}</p>
            </a>
          ))}
          <div className={styles.card} onClick={handleCreateMyModel1}>
            <a>Create Model1</a>
          </div>
        </div>
        {/* MODEL2 */}
        <p className={styles.description}>
          <code className={styles.code}>{myModel2List.length}</code>
          model2s
        </p>
        <div className={styles.grid}>
          {myModel2List.map((m2) => (
            <a className={styles.card} href={`/posts/${m2.id}`} key={m2.id}>
              <h3>{m2.name}</h3>
              <p>{m2.description}</p>
            </a>
          ))}
          <div className={styles.card} onClick={handleCreateMyModel2}>
            <a>Create Model2</a>
          </div>
        </div>
      </main>
    </div>
  );
}