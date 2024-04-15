import { useContext, useEffect, useState } from "react";
import axios from "../../config/api/axios";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import ErrorStrip from "../ErrorStrip";

const NotesForm = () => {
  const { paper, notes } = useContext(UserContext);
  const [note, setNote] = useState({
    paper: paper._id,
    title: "",
    body: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const noteId = useParams()?.note;

  useEffect(() => {
    if (noteId) {
      setNote(notes[noteId]);
    }
  }, [noteId, notes]);

  const handleFormChange = (e) => {
    setNote({
      ...note,
      [e.target.id]: e.target.value,
    });
  };

  const addNote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("notes/paper/" + paper._id, note);
      setError("");
      navigate(-1, { replace: true });
      toast.success(response.data.message);
    } catch (err) {
      setError(err);
    }
  };

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch("notes/" + note._id, note);
      navigate(-1, { replace: true });
      setError("");
      toast.success(response.data.message);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <main className="notes">
      <h2 className="mb-2 mt-3 text-6xl font-bold text-lightblue-950 underline decoration-inherit decoration-2 underline-offset-4 light:mt-0 light:text-slate-400">
        {paper?.paper}
      </h2>
      <h3 className="text-2xl font-medium">
        {noteId !== undefined ? "Edit Note" : "Add New Note"}
      </h3>
      <form>
        <label htmlFor="title" className="block text-lg font-medium">
          Title:
        </label>
        <input
          className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-lightblue-900 light:border-slate-200 light:caret-inherit light:focus:border-lightblue-400 light:active:border-lightblue-400"
          type="text"
          id="title"
          required
          value={note?.title}
          onChange={(e) => handleFormChange(e)}
        />
        <label htmlFor="body" className="block text-lg font-medium">
          Body:
        </label>
        <textarea
          className="mb-4 block w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-lightblue-900 light:border-slate-200 light:caret-inherit light:focus:border-lightblue-400 light:active:border-lightblue-400"
          rows="12"
          type="text"
          id="body"
          required
          value={note?.body}
          onChange={(e) => handleFormChange(e)}
        />
        {noteId !== undefined ? (
          <button
            className="mb-4 flex h-10 w-auto items-center gap-2 rounded-md border-[1.5px] border-solid border-lightblue-900 bg-slate-800 px-4 py-2 font-semibold tracking-wide text-slate-200 hover:bg-lightblue-900 focus:bg-lightblue-900 light:border-lightblue-300 light:bg-lightblue-900 light:text-lightblue-100 light:hover:bg-slate-900 "
            type="submit"
            onClick={(e) => updateNote(e)}
          >
            <RxUpdate />
            Update Note
          </button>
        ) : (
          <button
            className="mb-4 flex h-10 w-auto items-center gap-2 rounded-md border-[1.5px] border-solid border-lightblue-900 bg-slate-800 px-4 py-2 font-semibold tracking-wide text-slate-200 hover:bg-lightblue-900 focus:bg-lightblue-900 light:border-lightblue-300 light:bg-lightblue-900 light:text-lightblue-100 light:hover:bg-slate-900"
            type="submit"
            onClick={(e) => addNote(e)}
          >
            <FaPlus />
            Add Note
          </button>
        )}
      </form>
      {error ? <ErrorStrip error={error} /> : ""}
    </main>
  );
};

export default NotesForm;
