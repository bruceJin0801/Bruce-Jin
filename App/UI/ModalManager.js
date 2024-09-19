export default class ModalManager {
    constructor() {
      
      this.modal = document.getElementById("myModal");
      this.close = document.getElementsByClassName("close")[0];
      this.close.onclick = () => {
        this.closeModal()
      }
    }
  
    openModal(title, description) {
      console.log(title)
      document.getElementById("modalTitle").innerHTML = title;
      document.getElementById("modalDescription").innerHTML = description;
      console.log(title)
      if (title == 'About Bruce') {
        document.getElementById("modalTitle").style.color = '#4fced2';
      }
      else if (title == 'University of Waterloo') {
        document.getElementById("modalTitle").style.color = '#b9a61c';
      }
      else if (title == 'JD.com') {
        document.getElementById("modalTitle").style.color = '#ea6739';
      }
      else if (title == 'Blue Streak Electronics') {
        document.getElementById("modalTitle").style.color = '#1cb9a4';
      }
      else if (title == 'Ford') {
        document.getElementById("modalTitle").style.color = '#227ac0';
      }
      else if (title == 'UKG') {
        document.getElementById("modalTitle").style.color = '#1aa273';
      }
      else if (title == 'Proactive AI Lab') {
        document.getElementById("modalTitle").style.color = '#8daaa0';
      }
      this.modal.style.display = "block";
      this.modal.classList.remove('fadeOut');
      this.modal.classList.add('fadeIn');
    }
  
    closeModal() {
      this.modal.classList.remove('fadeIn');
      this.modal.classList.add('fadeOut');
      setTimeout(() => {
        this.modal.style.display = "none";
      }, 600);
    }
  }