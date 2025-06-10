export default function Form({ type }: { type: string }) {
  return (
    <form className="form">
      {type === 'reservation' && (
        <>
          <input type="date" className="form__input" placeholder="Check-in" />
          <input type="date" className="form__input" placeholder="Check-out" />
        </>
      )}
      {type === 'contact' && (
        <>
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Your Name" />
            <input type="email" className="form__input" placeholder="Your Email" />
          </div>
          <input type="text" className="form__input" placeholder="Subject" />
          <textarea className="form__textarea" placeholder="Message"></textarea>
          <label className="form__checkbox">
            <input type="checkbox" className="form__checkbox-input" />
            I have read and accepted terms and privacy
          </label>
        </>
      )}
      <button type="submit" className="form__button">Submit</button>
    </form>
  );
}