function AddPhotoModal(){
    return(
        <div className="modal fade" id="dodajZdjecie" aria-labelledby="dodajZdjecieLabel" tabIndex="-1" aria-hidden='true'>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title h5" id="dodajZdjecieLabel">
                            Dodaj zdjęcie
                        </h2>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Zamknij"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="tytul" className="form-label">
                                        Tytuł
                                    </label>
                                    <input type="text" className="form-control is-invalid" id="tytul" />
                                    <div className="invalid-feedback">
                                        Podaj tytuł zdjęcua - to pole jest wymagane.
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="kategoria" className="form-label">
                                        Kategoria
                                    </label>
                                    <select className="form-select" id="kategoria" defaultValue="">
                                        <option value="" disabled>
                                            Wybierz kategorię...
                                        </option>
                                        <option value="gory"> Góry</option>
                                        <option value="morze"> Morze</option>
                                        <option value="miasto"> Miasto</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="plik" className="form-label">
                                        PLik ze zdjęciem
                                    </label>
                                    <input type="file" className="form-control" id="plik" accept="image/*" />
                                    <div className="form-text">
                                        JPG lub PNG, maksymalnie 5 MB
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="opis" className="form-label">
                                        Opis
                                    </label>
                                    <textarea className="form-control" id="opis" rows="3"></textarea>
                                    <div className="form-text">
                                        Jedno-dwa zadania: gdzie i kiedy powstało zdjęcie
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input type="checkbox" id="zgoda" className="form-check-input" />
                                        <label htmlFor="zgoda" className="form-check-label">
                                            Zgadzam się na publikacje zdjęcia w galerii
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* strona 15 */}
                    </div>
                </div>
            </div>
        </div>
    )
}