\\( \def\A{{\mathbb{A}}} \def\C{{\mathbb{C}}} \def\Z{{\mathbb{Z}}} \def\Q{{\mathbb{Q}}} \def\R{{\mathbb{R}}} \def\N{{\mathbb{N}}} \def\fm{{\mathfrak{m}}}  \def\fp{{\mathfrak{p}}}  \def\fq{{\mathfrak{q}}} \def\spec{\operatorname{Spec}} \def\oh{\frac{1}{2}} \def\zoh{\Z[\oh]} \def\zmod#1{\Z/#1\Z} \\)


# Commutative rings without an identity

What goes wrong if we remove the condition that our commutative rings have an identity?  First of all, we are not guaranteed the existence of prime ideals.

Recall that a prime ideal in a ring \\(R\\) is an ideal \\(P \subset R\\) such that the quotient \\(R/P\\) is a *domain*.  By definition, a domain is a **non-zero** ring in which \\(0\\) is the only zero-divisor.  Equivalently, a prime ideal is a proper ideal \\(P \subset R\\) such that the quotient \\(R/P\\) is a domain.

**Example.**
Let \\((A,+)\\) be any abelian group.  Define a multiplication on \\(A\\) by setting \\(a \cdot b = 0\\), for all \\(a,b \in A\\).  This makes \\((A,+,\,\cdot)\\) into a commutative ring **without** 1.  The ring \\((A,+,\,\cdot)\\) has not prime ideals: since the square of any element is zero, any prime ideal must contain every element, contrary to the definition of prime ideal.  If we were to define the spectrum of \\((A,+,\,\cdot)\\), it would have no points.

Nevertheless, not all commutative rings without an identity are so pathological.

**Example.**
Let \\(I\\) be a set and let \\(R\_I = \bigoplus \_{i \in I} \zmod{2}\\) be the direct sum of \\(I\\)-many copies of \\(\zmod{2}\\).  Thus, \\(R\_I\\) is a commutative ring and it has an identity if and only if \\(I\\) is finite.  The set of prime ideals in \\(R\_I\\) is in bijection with the indexing set \\(I\\): any prime ideal must contain all copies of \\(\zmod{2}\\), except for exactly one.  In particular, if \\(I\\) is infinite, the set of prime ideals of \\(R\_I\\) is **not** homeomorphic to an affine scheme!