import './Team.css'
import TeamMember from './TeamMember/TeamMember'

export default function Team() {

    let memberInfo= [
        {src: 'img/team/team-1.jpg' , name:'Walter White' , job: 'Chief Executive Officer'},
        {src: 'img/team/team-2.jpg' , name:'Sarah Jhonson' , job: 'Product Manager'},
        {src: 'img/team/team-3.jpg' , name:'William Anderson' , job: 'CTO'}
    ]

  return (
    <section className="unit-team">
        <div >
            <div className="container wrap-Team">
                <div className="header-Team">
                    <h2>Team</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis delectus pariatur voluptate eaque, sunt nihil veritatis corrupti eos, harum quos modi molestiae nesciunt mollitia, ipsam culpa ipsa itaque rem? Quaerat, ab! Veniam corporis magni at maiores nulla modi doloremque voluptatem?</p>
                </div>
                <div className="row-Team">
                    <TeamMember {...memberInfo[0]}></TeamMember>
                    <TeamMember {...memberInfo[1]}></TeamMember>
                    <TeamMember {...memberInfo[2]}></TeamMember>
                </div>
            </div>
        </div>
    </section>
  )
}
