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
        school: "University of Illinois Urbana-Champaign",
        degree: "Bachelor of Science in Statistics & Computer Science",
        period: "2025 – 2028",
        coursework: "Data Structures & Algorithms, Computer Architecture, Probability, Linear Algebra",
        activities: "Illinois Business Consulting, SIGRobotics, Center for Health Informatics, Financial Engineering Club, GTO Illini",
        honors: "Chancellor's Scholar",
        logoPath: "/logos/uiuc.png",
    },
    {
        school: "Waubonsie Valley High School",
        period: "2021 – 2025",
        activities: "Warriors Who Code (President), Science Olympiad (VP), SkillsUSA (VP), Math Team, Key Club, Cross Country, Track & Field",
        honors: "Outstanding Student in Computer Science",
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
                                <span className="font-medium text-foreground">Coursework:</span> {item.coursework}
                            </p>
                        )}
                        {item.activities && (
                            <p>
                                <span className="font-medium text-foreground">Activities:</span> {item.activities}
                            </p>
                        )}
                        {item.honors && (
                            <p>
                                <span className="font-medium text-foreground">Honors:</span> {item.honors}
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
                        Education
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
