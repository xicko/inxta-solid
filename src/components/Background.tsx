export default function Background() {
    return(
    <div class="background-container">
        <div class="glow-container">
          <div class="ball"></div>
          <div class="ball" style={{ 'animation-delay': '-12s', width: '35%', 'animation-duration': '20s' }}></div>
          <div class="ball" style={{ 'animation-delay': '-10s', width: '30%', 'animation-duration': '30s' }}></div>
          <div class="ball" style={{ 'animation-delay': '-14s', width: '40%', 'animation-duration': '25s' }}></div>
        </div>
    </div>
    )
}