import { Eye } from 'react-bootstrap-icons';

export const CertificateCard = ({ title, description, issuer, date, url }) => {
  return (
    <div className="project-card">
      <div className="proj-imgbx" style={{ background: '#000000' }}>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description || `Issued by ${issuer}`}</span>
          {date && (
            <div style={{ marginTop: '10px', marginBottom: '15px' }}>
              <span style={{
                display: 'inline-block',
                background: 'transparent',
                padding: '0',
                margin: '0',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                {date}
              </span>
            </div>
          )}
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            marginTop: 'auto'
          }}>
            {url && url !== "#" && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(170, 54, 124, 0.8)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(170, 54, 124, 1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(170, 54, 124, 0.8)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Eye size={14} />
                Take a look
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
