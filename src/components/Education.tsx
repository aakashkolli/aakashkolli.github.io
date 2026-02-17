import { motion } from "framer-motion";

interface EducationItem {
    school: string;
    degree?: string;
    period: string;
    coursework?: string;
    activities?: string;
    honors?: string;
    logoPath?: string;
}

const education: EducationItem[] = [
    {
        school: "university of illinois urbana-champaign",
        degree: "bachelor of science in statistics & computer science",
        period: "2025 – 2028",
        coursework: "data structures & algorithms, computer architecture, probability, linear algebra",
        activities: "illinois business consulting, sigrobotics, center for health informatics, financial engineering club, gto illini",
        honors: "chancellor's scholar",
        logoPath: "/logos/uiuc.png",
    },
    {
        school: "waubonsie valley high school",
        period: "2021 – 2025",
        activities: "warriors who code - president, science olympiad - vp, skillsusa - vp, math team, key club, cross country, track & field",
        honors: "outstanding student in computer science",
        logoPath: "/logos/wvhs.png", // Place logo at: public/logos/wvhs.png
    },
];

const EducationCard = ({ item, index }: { item: EducationItem; index: number }) => {
    return (
        <motion.div
            className="card-surface p-6 md:p-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
        >
            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 shrink-0 flex items-center justify-center overflow-hidden">
                                    {item.logoPath ? (
                                        item.logoPath.endsWith('.svg') ? (
                                            <object
                                                data={item.logoPath}
                                                type="image/svg+xml"
                                                className="w-full h-full object-contain p-1"
                                                aria-label={`${item.school} logo`}
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                        e.currentTarget.parentElement!.innerHTML = '<span class="text-xs text-muted-foreground font-mono">logo</span>';
                                                }}
                                            />
                                        ) : (
                                            <img
                                                src={item.logoPath}
                                                alt={`${item.school} logo`}
                                                className="w-full h-full object-contain p-1"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                        e.currentTarget.parentElement!.innerHTML = '<span class="text-xs text-muted-foreground font-mono">logo</span>';
                                                }}
                                            />
                                        )
                                    ) : (
                                        <span className="text-xs text-muted-foreground font-mono">logo</span>
                                    )}
                                </div>

                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                        <div>
                            <h3 className="font-bold text-foreground">{item.school}</h3>
                            {item.degree && (
                                <p className="text-sm text-muted-foreground">{item.degree}</p>
                            )}
                        </div>
                        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                        {item.coursework && (
                            <p>
                                <span className="font-medium text-foreground">coursework:</span> {item.coursework}
                            </p>
                        )}
                        {item.activities && (
                            <p>
                                <span className="font-medium text-foreground">activities:</span> {item.activities}
                            </p>
                        )}
                        {item.honors && (
                            <p>
                                <span className="font-medium text-foreground">honors:</span> {item.honors}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="section-padding border-t border-border">
            <div className="container-narrow">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        education
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {education.map((item, i) => (
                        <EducationCard key={item.school} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
