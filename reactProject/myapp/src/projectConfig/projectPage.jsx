import { Children } from "react";



export default function ProjectPage({children,projectNumber,ProjectName}){
    return(
        <>
            <div style={{
                justifyContent:'center',
                borderColor:'gray',
                fontFamily:'sans-serif',
                maxWidth:"600px",
                margin:"auto"
            }}>


                <div style={{
                    border:'1px solid #7e9c73',
                    borderBottom:'0',
                    padding:'5px',
                    backgroundColor:'#b2c7ab',
                    borderRadius:'10px 10px 0 0',
                    display:"flex",
                    justifyContent:"space-evenly",
                    fontSize:"1.1rem"
                }}>
                    <p>Project Number : {projectNumber}</p>
                    <p>Project Name : {ProjectName}</p>
                </div>


                <section style={{
                    textAlign:'center',
                    padding:'10px',
                    border:'1px solid #7e9c73'
                }}>
                    {children}
                </section>
            </div>
            <hr style={{
                margin:"20px 0"
            }}/>
        </>
    )
}