import React from 'react'

const SearchBarComponent = ({value, onChange, noResults}) => {
    const langStyle = {
        textDecoration: 'underline', 
        color: 'var(--cta-secondary)', 
        fontWeight: '700', 
        margin: '0 2px'
    }

  return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <input
              style={{ width: '83%', color: 'hsl(301, 33%, 40%)', padding: '0.5rem 0 0.5rem 1rem', fontSize: '1.5rem', boxShadow: '0px 2px 8px rgba(204, 0, 204, 0.1), 0px 4px 16px rgba(77, 5, 76, 0.3)', borderRadius: '5px', border: 'none', margin: '2rem 0' }}
              onChange={onChange}
              type="text"
              placeholder='Search by language...'
          />
          {noResults && (
              <p style={{
                  width: '83%',
                  margin: '0 0 1rem 0',
                  fontSize: '1rem'
              }}>
                  No projects found using that the “<span style={langStyle}>{value}</span>” language.
              </p>
          )}
      </div>
  )
}

export default SearchBarComponent