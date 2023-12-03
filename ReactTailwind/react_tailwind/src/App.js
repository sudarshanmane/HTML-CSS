import "./App.css";

function App() {
  return (
    <main>
      <section>
        <div className="flex w-72 border-2 border-sky-600 m-auto mt-14 p-4 justify-around rounded-xl shadow-lg space-x-4 text-slate-500">
          <div className="w-10 border">
            <img
              className="w-fit"
              src="https://raw.githubusercontent.com/gist/grvpanchal/123b0cee4f2afc6a1f6b9c18e0aee205/raw/33f6b6cf773d5878b17eddefc3b68e8efffd1f24/logo.tailwind.svg"
              alt=""
            />
          </div>
          <div>
            <b>ChitChat</b>
            <p>You Have a New Message</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
