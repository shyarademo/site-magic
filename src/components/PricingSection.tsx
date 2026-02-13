import { motion } from "framer-motion";
import { type SiteData } from "@/data/siteDataSchema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  data: SiteData;
}

const PricingTable = ({ title, headers, rows }: { title?: string; headers?: string[]; rows?: string[][] }) => (
  <div>
    <h3 className="mb-4 text-lg font-bold text-foreground font-sans">{title}</h3>
    <div className="overflow-x-auto rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary">
            {headers.map((h) => (
              <TableHead key={h} className="text-secondary-foreground font-semibold font-sans whitespace-nowrap">
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} className="hover:bg-accent/50">
              {row.map((cell, j) => (
                <TableCell key={j} className={`font-sans whitespace-nowrap ${j === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

const PricingSection = ({ data }: Props) => {
  const { pricing } = data;

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary font-sans">
            Transparent Pricing
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Rates
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="local" className="w-full">
            <TabsList className="mx-auto mb-8 flex w-fit">
              <TabsTrigger value="local" className="font-sans">Local</TabsTrigger>
              <TabsTrigger value="outstation" className="font-sans">Outstation</TabsTrigger>
              <TabsTrigger value="routes" className="font-sans">Popular Routes</TabsTrigger>
            </TabsList>
            <TabsContent value="local">
              <PricingTable {...pricing.local} />
            </TabsContent>
            <TabsContent value="outstation">
              <PricingTable {...pricing.outstation} />
            </TabsContent>
            <TabsContent value="routes">
              <PricingTable {...pricing.routes} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
