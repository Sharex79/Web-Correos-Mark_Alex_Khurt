// src/components/TramiteDGT.js
// Pantalla de "Trámite DGT" con animación, mensaje y área de imagen
import { EmpanadaBanner } from './EmpanadaBanner.js';

export function TramiteDGT() {
  const container = document.createElement('div');
  container.id = 'tramitedgt-container';
  container.style.cssText = `
    margin-top: 90px;
    width: 100vw;
    min-height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    padding: 2rem 1rem;
  `;

  // Banner de empanadas
  container.appendChild(EmpanadaBanner());

  // Mensaje centrado
  const msg = document.createElement('div');
  msg.textContent = 'Seguimos trabajando en ello';
  msg.style.cssText = `
    font-size: 2.2rem;
    color: #f97316;
    font-weight: 700;
    letter-spacing: 0.02em;
    background: rgba(36,36,36,0.92);
    border-radius: 1.2rem;
    padding: 2rem 2.5rem;
    box-shadow: 0 2px 16px rgba(0,0,0,0.10);
    text-align: center;
    max-width: 90vw;
  `;
  container.appendChild(msg);

  // Área cuadrada para una imagen
  const imageBox = document.createElement('div');
  imageBox.style.cssText = `
    width: min(480px, 92vw);
    aspect-ratio: 1 / 1;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    overflow: hidden;
  `;
  // Imagen opcional dentro del área
  const img = document.createElement('img');
  img.src = '/WorkinProgress.png';
  img.alt = 'Imagen de trámite DGT';
  img.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  `;
  imageBox.appendChild(img);
  container.appendChild(imageBox);

  // Animar entrada
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    });
  });

  return container;
}
