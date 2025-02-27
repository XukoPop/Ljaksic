import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
    setShowTerms(false);
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
    setShowPrivacyPolicy(false);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <img src="/shield-logo.png" alt="VaultCore Logo" width="32" height="32" style={{borderRadius: '50%'}} />
            <h1>VaultCore</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#download" className="download-btn-small">Download</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Secure Password Management. <span className="highlight">Completely Offline.</span></h1>
              <p>VaultCore is a powerful password manager that keeps your data secure, private, and entirely under your control. Unlike cloud-based alternatives, VaultCore stores everything locally with strong encryption.</p>
              <div className="hero-buttons">
                <a href="#download" className="download-btn">Download VaultCore</a>
                <a href="#learn-more" className="learn-more-btn">Learn More</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/dashboard-preview.png" alt="VaultCore Dashboard Preview" onError={(e) => {e.target.onerror = null; e.target.src = "/api/placeholder/500/350"}} />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="#3498db">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <h3>Password Management</h3>
              <p>Store, organize, and easily access all your passwords in one secure location.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="#3498db">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <h3>Complete Privacy</h3>
              <p>100% offline operation means your data never leaves your device. No servers, no sharing, no leaks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="#3498db">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <h3>Strong Encryption</h3>
              <p>AES-256 encryption protects all your sensitive data with industry-standard security.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="#3498db">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <h3>Secure Notes</h3>
              <p>Store important information, notes, and documents with the same level of protection.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="#3498db">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                </svg>
              </div>
              <h3>Card Storage</h3>
              <p>Securely save credit card details for quick access when you need them.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="#3498db">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <h3>Password Health Check</h3>
              <p>Analyze password strength and identify reused or old passwords that need updating.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="security">
        <div className="container">
          <h2>Security First Design</h2>
          <div className="security-content">
            <div className="security-text">
              <h3>How VaultCore Keeps Your Data Safe</h3>
              <ul>
                <li><strong>Local Storage Only:</strong> Your data never leaves your device.</li>
                <li><strong>AES-256 Encryption:</strong> Military-grade encryption for all your stored information.</li>
                <li><strong>Zero Knowledge:</strong> Your master password is never stored directly - only a salted hash.</li>
                <li><strong>Auto-Lock:</strong> Automatically locks after periods of inactivity.</li>
                <li><strong>No Network Access:</strong> The application doesn't require internet access, eliminating remote attack vectors.</li>
              </ul>
            </div>
            <div className="security-image">
              <div className="security-shield">
                <img src="/shield-logo.png" alt="VaultCore Logo" width="120" height="120" style={{borderRadius: '50%'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="comparison">
        <div className="container">
          <h2>Why Choose VaultCore?</h2>
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>VaultCore</th>
                  <th>Cloud Password Managers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Storage</td>
                  <td>100% Local</td>
                  <td>Cloud Servers</td>
                </tr>
                <tr>
                  <td>Internet Required</td>
                  <td>No</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Risk of Data Breach</td>
                  <td>Low (Device-Level Only)</td>
                  <td>Higher (Server Vulnerabilities)</td>
                </tr>
                <tr>
                  <td>Subscription</td>
                  <td>Free</td>
                  <td>Usually Paid</td>
                </tr>
                <tr>
                  <td>Your Data Control</td>
                  <td>Complete</td>
                  <td>Partial</td>
                </tr>
                <tr>
                  <td>Platform</td>
                  <td>Windows</td>
                  <td>Various</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Why was VaultCore created?</h3>
              <p>VaultCore was developed with a focus on security, usability, and privacy. We wanted to create a password manager that not only keeps your data secure but also provides a clean, modern interface that's easy to use. VaultCore stores all your data locally and uses strong encryption to ensure your passwords stay protected.</p>
            </div>
            <div className="faq-item">
              <h3>Is VaultCore free to use?</h3>
              <p>Yes! VaultCore is completely free for personal use. We believe that strong security should be accessible to everyone without cost barriers.</p>
            </div>
            <div className="faq-item">
              <h3>Where is my data stored?</h3>
              <p>VaultCore stores all your data locally on your device. Your passwords and sensitive information never leave your computer, giving you complete control over your data.</p>
            </div>
            <div className="faq-item">
              <h3>How secure is VaultCore?</h3>
              <p>VaultCore uses industry-standard encryption algorithms to protect your data. Your master password is never stored directly - instead, we use a salted hash. All your stored passwords and notes are encrypted using AES-256 encryption, which is virtually impossible to break using current technology.</p>
            </div>
            <div className="faq-item">
              <h3>What if I forget my master password?</h3>
              <p>If you've set up a security question, you can use it to reset your master password. Otherwise, there is no way to recover your data if you forget your master password - this is a security feature that ensures no one can bypass the encryption.</p>
            </div>
            <div className="faq-item">
              <h3>Does VaultCore work on mobile devices?</h3>
              <p>Currently, VaultCore is available for desktop platforms only. Mobile applications are on our roadmap for future development.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="download">
        <div className="container">
          <h2>Download VaultCore</h2>
          <p>Get started with VaultCore today. Free, secure, and completely offline.</p>
          <div className="download-options">
            <a href="https://www.dropbox.com/scl/fi/mpdylvvrgmj6hsax946gs/VaultCore.exe?rlkey=f9llcj9sanvk69y0wttstnb9b&st=r0lxfao3&dl=1" className="download-btn" download>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
                <path d="M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-8-3h-2v4h2v-4zm-6 0h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v-2zm10-1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v2zm-6 0h2v-2h-2v2zm-6 5h2v-2h-2v2zm14-8c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-9-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v-2zm6 9h-2v2c0 .55.45 1 1 1s1-.45 1-1v-2zm-6 0h-2v2h2v-2zM3 10c0 .55.45 1 1 1h2v-2H4c-.55 0-1 .45-1 1z" />
              </svg>
              Download for Windows
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/shield-logo.png" alt="VaultCore Logo" width="24" height="24" style={{borderRadius: '50%'}} />
              <span>VaultCore</span>
            </div>
            <div className="footer-links">
              <a href="#" onClick={togglePrivacyPolicy}>Privacy Policy</a>
              <a href="#" onClick={toggleTerms}>Terms of Service</a>
              <a href="mailto:support@vaultcore.online">Contact</a>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} VaultCore. All rights reserved.</p>
            <div className="developer-credits">
              <p>Developed by wafermelon. | <a href="https://xuko.xyz" target="_blank" rel="noopener noreferrer">xuko.xyz</a> | <a href="mailto:xukololz7@gmail.com">xukololz7@gmail.com</a></p>
            </div>
          </div>
        </div>
      </footer>

      {showPrivacyPolicy && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={togglePrivacyPolicy}>&times;</span>
            <h2>Privacy Policy</h2>
            <div className="policy-content">
              <h3>Data Collection</h3>
              <p>This application does not collect or transmit any personal information. All data you input into the application is stored locally on your device in an encrypted format.</p>
              
              <h3>Local Data Storage</h3>
              <p>The application stores the following types of data locally:</p>
              <ul>
                <li>Master password (hashed)</li>
                <li>Your saved passwords and associated details</li>
                <li>Secure notes</li>
                <li>Credit card information</li>
                <li>Personal identity information</li>
              </ul>
              <p>All sensitive data is encrypted using industry-standard encryption methods before being stored in the local database.</p>
              
              <h3>Third Parties</h3>
              <p>This application does not share any information with third parties as it does not collect or transmit data from your device.</p>
              
              <h3>Data Security</h3>
              <p>Your data is secured using encryption with your master password as the key. Without the master password, the encrypted data cannot be accessed, even if someone obtains the database file.</p>
              <p>However, the security of your data also depends on:</p>
              <ul>
                <li>The strength of your master password</li>
                <li>The security of your device</li>
                <li>How you manage access to your device</li>
              </ul>
              
              <h3>Your Rights</h3>
              <p>Since all your data remains on your device and under your control, you maintain full rights to:</p>
              <ul>
                <li>Access your data at any time</li>
                <li>Modify or delete your data</li>
                <li>Export your data (if supported by the application)</li>
                <li>Delete the application and all associated data</li>
              </ul>
              
              <h3>Updates to This Policy</h3>
              <p>This privacy policy may be updated with new releases of the application. Any changes will be focused on improving the protection of your privacy.</p>
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleTerms}>&times;</span>
            <h2>Terms of Service</h2>
            <div className="policy-content">
              <h3>Overview</h3>
              <p>VaultCore is an independent project similar to commercial password managers like NordPass, LastPass, or 1Password, but is provided for educational and personal use.</p>
              
              <h3>Disclaimer of Warranty</h3>
              <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
              
              <h3>Security Limitations</h3>
              <p>While this application uses encryption to protect your data, no security measure is foolproof. The application uses standard cryptographic techniques to secure your data, but it may not prevent sophisticated attacks or exploits.</p>
              
              <h3>Data Storage</h3>
              <p>All data is stored locally on your device. No data is transmitted to any servers or third parties. Your passwords, notes, and personal information remain on your device, encrypted with your master password.</p>
              
              <h3>Your Responsibilities</h3>
              <ul>
                <li>Keep your master password secure and do not share it.</li>
                <li>Regularly back up your password database file.</li>
                <li>Keep your operating system and this application updated.</li>
                <li>Be vigilant about potential malware or unauthorized access to your device.</li>
              </ul>
              
              <h3>Liability</h3>
              <p>The creators and maintainers of this application are not liable for any damages or losses resulting from:</p>
              <ul>
                <li>Security breaches or unauthorized access to your data</li>
                <li>Loss of data or inability to access your stored information</li>
                <li>Misuse of the application or the information stored within it</li>
              </ul>
              
              <h3>Project Status</h3>
              <p>This application is a personal/educational project and is not intended to compete with commercial password management solutions. It may lack certain features or security measures found in commercial products.</p>
              
              <h3>Changes to This Agreement</h3>
              <p>The terms of this agreement may change over time. Updated versions will be included with new releases of the application.</p>
              
              <p>By using VaultCore, you acknowledge that you have read and agree to these terms.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;