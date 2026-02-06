import { servicesData } from "@/data/services";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  return (
    <>
      <section>
        <Container>
          <Heading
            h5="Latest service"
            h3="Explore Our Best Premium Quality Service"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
