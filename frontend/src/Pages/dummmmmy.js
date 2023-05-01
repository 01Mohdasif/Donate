return (
  <div>
    <h2>Create a new project</h2>
    <form onSubmit={handleSubmit}>
    <div className="row">
      {fields.map((field) => (
        <div key={field.name} className="col-sm-6">
            <div className="form-group">
          <label>
            {field.label}{" "}
            {field.required && <span style={{ color: "red" }}>*</span>}
          </label>
          {field.type === "textarea" ? (
            <textarea
            className="form-control"
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              required={field.required}
            />
          ) : field.type === "file" ? (
            <input
            className="form-control"
              type="file"
              name={field.name}
              onChange={handleFileChange}
              required={field.required}
            />
          ) : (
            <input
            className="form-control"
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleInputChange}
              required={field.required}
            />
          )}
        </div>
        </div>
      ))}
      </div>
      <button type="submit" className="mb-2 mt-2 btn btn-primary">Submit</button>
    </form>
  </div>
);















return (
    <div>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {fields.map(({ name, label, type, required }) => (
            <div key={name} className="col-sm-6">
              <div className="form-group">
                <label htmlFor={name}>{label}</label>
                {type === "textarea" ? (
                  <textarea
                    className="form-control"
                    id={name}
                    name={name}
                    value={formData[name] || ""}
                    onChange={handleInputChange}
                    required={required}
                  />
                ) : (
                  <input
                    type={type}
                    className="form-control"
                    id={name}
                    name={name}
                    onChange={handleFileChange}
                    required={required}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className="mb-2 mt-2 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );