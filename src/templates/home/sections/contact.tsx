"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from '@/i18n/context';
import { Section } from '@/components/ui/section';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { Textarea } from '@/components/ui/textarea';
import { SlideUp, FadeIn } from '@/components/ui/animations';
import { contactSchema, ContactFormData } from '@/lib/validations/contact';
import { submitContactForm } from '@/actions/contact';

export const Contact = () => {
    const { t } = useTranslation();
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setServerError(null);
        const result = await submitContactForm(data);
        
        if (result.success) {
            reset();
        } else {
            setServerError(result.error || t.contact.formError);
        }
    };

    return (
        <Section id="contact" className="bg-accent text-accent-foreground min-h-[70vh] w-full flex flex-col lg:flex-row items-stretch lg:items-center justify-between py-16 md:py-24 lg:py-28 border-none gap-10 md:gap-12 lg:gap-16">
            
            <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full min-w-0">
                <SlideUp>
                    <Typography variant="label" className="text-black mb-8 block bg-black/10 px-4 py-2">
                        05. {t.contact.title}
                    </Typography>
                </SlideUp>

                <SlideUp delay={0.1}>
                    <Typography variant="h2" className="text-background hover:text-black hover:tracking-wider hover:-translate-y-1 cursor-default mb-8 md:mb-12 transition-all duration-300 ease-out max-w-full wrap-break-word">
                        {t.contact.subtitle}
                    </Typography>
                </SlideUp>

                <FadeIn delay={0.2} className="flex flex-col gap-5 md:gap-6 mt-2 md:mt-4 items-center lg:items-start">
                    <a href={`mailto:${t.contact.email}`} className="group inline-flex items-center">
                        <Typography variant="h3" className="text-black group-hover:text-background lowercase tracking-normal transition-colors duration-200 ease-out break-all">
                            {t.contact.email}
                        </Typography>
                    </a>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-5 md:gap-8 mt-3 md:mt-4">
                        <a href="#" className="font-display font-bold text-xl uppercase tracking-widest text-background hover:text-black hover:underline decoration-4 underline-offset-8">
                            {t.contact.github}
                        </a>
                        <a href="#" className="font-display font-bold text-xl uppercase tracking-widest text-background hover:text-black hover:underline decoration-4 underline-offset-8">
                            {t.contact.linkedin}
                        </a>
                    </div>
                </FadeIn>
            </div>

            <div className="flex-1 w-full max-w-xl min-w-0 mx-auto lg:mx-0">
                <FadeIn delay={0.3}>
                    {isSubmitSuccessful ? (
                        <div className="bg-background text-foreground p-6 sm:p-8 md:p-12 border-4 border-black text-center shadow-[12px_12px_0_0_rgba(0,0,0,1)] md:shadow-[16px_16px_0_0_rgba(0,0,0,1)]">
                            <Typography variant="h2" className="mb-4 text-accent">
                                ✔ {t.contact.formSuccessTitle}
                            </Typography>
                            <Typography variant="body" className="font-bold text-xl">
                                {t.contact.formSuccess}
                            </Typography>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 bg-white p-5 sm:p-6 md:p-10 border-4 border-black  md:shadow-[16px_16px_0_0_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:hover:translate-x-2 md:hover:translate-y-2 transition-all duration-300 ease-out">
                            
                            {serverError && (
                                <div className="bg-black text-background p-4 font-bold text-sm">
                                    {serverError}
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="contact-name">
                                    {t.contact.formName}
                                </Label>
                                <Input
                                    id="contact-name"
                                    {...register("name")}
                                    placeholder={t.contact.formNamePlaceholder}
                                />
                                {errors.name?.message && (
                                    <Text
                                        variant="helper"
                                        className="self-start bg-black px-3 py-1 text-background"
                                        role="alert"
                                    >
                                        {t.contact.errors[errors.name.message as keyof typeof t.contact.errors] || errors.name.message}
                                    </Text>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="contact-email">
                                    {t.contact.formEmail}
                                </Label>
                                <Input
                                    id="contact-email"
                                    {...register("email")}
                                    type="email"
                                    placeholder={t.contact.formEmailPlaceholder}
                                />
                                {errors.email?.message && (
                                    <Text
                                        variant="helper"
                                        className="self-start bg-black px-3 py-1 text-background"
                                        role="alert"
                                    >
                                        {t.contact.errors[errors.email.message as keyof typeof t.contact.errors] || errors.email.message}
                                    </Text>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="contact-message">
                                    {t.contact.formMessage}
                                </Label>
                                <Textarea
                                    id="contact-message"
                                    {...register("message")}
                                    placeholder={t.contact.formMessagePlaceholder}
                                    rows={4}
                                />
                                {errors.message?.message && (
                                    <Text
                                        variant="helper"
                                        className="self-start bg-black px-3 py-1 text-background"
                                        role="alert"
                                    >
                                        {t.contact.errors[errors.message.message as keyof typeof t.contact.errors] || errors.message.message}
                                    </Text>
                                )}
                            </div>

                            <Button 
                                type="submit" 
                                variant='secondary'
                                disabled={isSubmitting}
                                className="mt-4 w-full h-16 text-xl"
                            >
                                {isSubmitting ? t.contact.formSubmitting : t.contact.formSubmit}
                            </Button>
                        </form>
                    )}
                </FadeIn>
            </div>
            
        </Section>
    );
};
