import BecomeaSponsor from "../../components/BecomeaSponsor"
import  Container from "../../components/Container";
import JobFair from "../../components/JobFair";
import Partners from "../../components/Partners";
import SponsorLevel from "../../components/SponsorLevel";

const Sponsors = () => {
  return (
    <div className="my-16 pt-24" name='sponsors'>
      <Container className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1">
          <BecomeaSponsor />
        </div>
        <div className="lg:col-span-2">
          <SponsorLevel />
        </div>
      </Container>
      <Container className="mt-10">
        <Partners />
        <JobFair />
      </Container>
    </div>
  )
}

export default Sponsors