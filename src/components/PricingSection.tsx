import { motion } from "framer-motion";
import { type SiteData } from "@/data/siteDataSchema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

interface Props {
  data: SiteData;
}

const PricingSection = ({ data }: Props) => {
  const { pricing } = data;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary font-sans">
            {pricing.subheading}
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {pricing.heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="local" className="w-full">
            <TabsList className="mx-auto mb-8 flex w-fit">
              <TabsTrigger value="local" className="font-sans">Local Rates</TabsTrigger>
              <TabsTrigger value="outstation" className="font-sans">Outstation</TabsTrigger>
              <TabsTrigger value="routes" className="font-sans">Route Fares</TabsTrigger>
            </TabsList>

            <TabsContent value="local">
              <div className="overflow-x-auto rounded-xl border bg-card">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary">
                      <TableHead className="text-secondary-foreground font-semibold font-sans">Vehicle</TableHead>
                      <TableHead className="text-secondary-foreground font-semibold font-sans">4HR @ 40 KM</TableHead>
                      <TableHead className="text-secondary-foreground font-semibold font-sans">8HR @ 60 KM</TableHead>
                      <TableHead className="text-secondary-foreground font-semibold font-sans">10HR @ 80KM</TableHead>
                      <TableHead className="text-secondary-foreground font-semibold font-sans">Meter Charge</TableHead>
                      <TableHead className="text-secondary-foreground font-semibold font-sans">Extra hr Charge</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricing.vehicleRates.map((rate) => (
                      <TableRow key={rate.vehicle} className="hover:bg-accent/50">
                        <TableCell className="font-semibold text-foreground font-sans whitespace-nowrap">{rate.vehicle}</TableCell>
                        <TableCell className="text-muted-foreground font-sans">{rate.local["4hr40km"]}</TableCell>
                        <TableCell className="text-muted-foreground font-sans">{rate.local["8hr60km"]}</TableCell>
                        <TableCell className="text-muted-foreground font-sans">{rate.local["10hr80km"]}</TableCell>
                        <TableCell className="text-muted-foreground font-sans">{rate.local.meterCharge}</TableCell>
                        <TableCell className="text-muted-foreground font-sans">{rate.local.extraHrCharge}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="outstation">
              <h3 className="mb-4 text-lg font-bold text-foreground font-sans">Outside Gaya Cab Rate</h3>
              <div className="overflow-x-auto rounded-xl border bg-card">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary">
                      <TableHead className="text-secondary-foreground font-semibold font-sans">Vehicle</TableHead>
                      <TableHead className="text-secondary-foreground font-semibold font-sans">Extra Meter Charges</TableHead>
                      <TableHead className="text-secondary-foreground font-semibold font-sans">Minimum Charges/Day</TableHead>
                      <TableHead className="text-secondary-foreground font-semibold font-sans">Driver Night Halt Charge</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricing.vehicleRates.map((rate) => (
                      <TableRow key={rate.vehicle} className="hover:bg-accent/50">
                        <TableCell className="font-semibold text-foreground font-sans whitespace-nowrap">{rate.vehicle}</TableCell>
                        <TableCell className="text-muted-foreground font-sans">{rate.outstation.extraMeter}</TableCell>
                        <TableCell className="text-muted-foreground font-sans">{rate.outstation.minChargesDay}</TableCell>
                        <TableCell className="text-muted-foreground font-sans">{rate.outstation.driverNightHalt}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="routes">
              <h3 className="mb-4 text-lg font-bold text-foreground font-sans">{pricing.routeFares.title}</h3>
              <div className="overflow-x-auto rounded-xl border bg-card">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary">
                      {pricing.routeFares.headers.map((h) => (
                        <TableHead key={h} className="text-secondary-foreground font-semibold font-sans whitespace-nowrap">{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricing.routeFares.rows.map((row, i) => (
                      <TableRow key={i} className="hover:bg-accent/50">
                        {row.map((cell, j) => (
                          <TableCell key={j} className={`font-sans whitespace-nowrap ${j <= 1 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                            {cell}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
