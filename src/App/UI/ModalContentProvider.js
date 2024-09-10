export default class ModalContentProvider {
    constructor() {
      this.modalContents = {
        school: {
          title: 'University of Waterloo',
          description: 'At 18, Bruce left China for the University of Waterloo, seeking its renowned job opportunities. Along the way, he faced the stress of interviews, burnout from exams, and homesickness, which tested his resilience and shaped his character. Now, with a clear vision for his future, he’s focused on becoming an exceptional software engineer, driven by a passion to create products that make a real difference in people’s lives.',
        },
        JD: {
          title: 'JD.com',
          description: 'At JD.com, Bruce started his tech career as a Software Engineer in Test, working closely with software engineers, product managers, and UI designers. His role involved a variety of testing methods including manual, automation, unit, and stress testing. This experience emphasized the importance of meticulous attention to detail, and shaping him into a precise and effective engineer.',
        },
        BSE: {
          title: 'Blue Streak Electronics',
          description: 'Bruce landed his first developer role at BSE, joining a small team of three. As the only Java expert, he designed and implemented a data management system that interfaced between Excel files and a database over four months. He managed the project independently, significantly boosting his UI design, full-stack development, and database management skills. This experience solidified his career path as a software development engineer.​',
        },
        Ford: {
          title: 'Ford',
          description: 'Bruce joined Ford’s Data Analytics team as a software engineer, where he took charge of the Dashboard Manager project using React, Java and Spring Boot. This role continued to enhance his full-stack development skills. More importantly, Bruce learned that the key to being a successful software development engineer lies in thinking critically and solving problems effectively, rather than just coding. This insight has profoundly influenced his approach to software development.',
        },
        UKG: {
          title: 'UKG',
          description: 'In the summer of 2024, Bruce advanced his career by joining UKG’s Mobile Platform team as a software development engineer. He worked with the DevOps team on CI/CD pipeline maintenance and implemented the Trox framework across services using his Java, TypeScript, and networking skills. Through this role, Bruce not only honed his technical abilities but also realized the importance of soft skills like communication and time management, marking a key progression in his development as a versatile SDE.',
        },
        AI: {
          title: 'Proactive AI Lab',
          description: 'Bruce is excited to join the Proactive AI Lab, a startup in the USA known for its passionate and talented team. He’s thrilled to apply his AI skills to real-world problems and has the opportunity to practice his Python skills. In this internship, Bruce is determined to leverage all the knowledge he’s gained from previous experiences, aiming to contribute fully and work as a genuine software development engineer',
        },
        me : {
          title: 'About Bruce',
          description: 'My name is Bruce Jin, a passionate and creative 4th-year computer science student at the University of Waterloo, seeking new grad software positions where I can apply my skills in programming, system design, and problem-solving to deliver innovative solutions.'
        },
      }
    }
  
    getModalInfo(portalName) {
      return this.modalContents[portalName];
    }
  }
  