export default function TodoList(props) {
  return (
    <section>
      <h1>Дела</h1>

      <table className="table is-hoverable is-fullwidth">
        <tbody>
          {props.list.map((item) => (
            <tr key={item.key}>
              <td>{item.done ? <del>{item.title}</del> : item.title}</td>
              <td>
                <button
                  className="button is-success"
                  title="выполнено"
                  disabled={item.done}
                >
                  ✅
                </button>
              </td>
              <td>
                <button className="button is-danger" title="удалить">
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
